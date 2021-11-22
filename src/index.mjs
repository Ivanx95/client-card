import Logger from "./logger/Logger.js";
import apiRouter from "./api/cardController.js" ;
import cardTemplateRouter from "./api/CardTemplateController.mjs" ;
import brandRouter from "./api/BrandController.js" ;
import userRouter from "./api/userController.js" ;
import authRouter from "./api/auth.mjs";
import fileRouter from "./api/fileController.js";
import bodyParser  from 'body-parser';
import session  from 'express-session';
import cookieParser  from 'cookie-parser';
import { app, startApp, stripe}  from "./server.js";

import dataSource from "./db/model/DB.js";
const CardTemplate = dataSource.models.CardTemplate;


Logger.log({level:"info", message: "Starting application"});

app.set('views', './src/views');
app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: "1234"}));

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'mxn',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://mycard.host/',
    cancel_url: 'https://mycard.host/#payments',
  });

  res.redirect(303, session.url);
});


app.use((req,res, next)=>{
  if(req.session.user){
   Logger.log({level:"info", message: `User: ${JSON.stringify(req.session.user)}`});  
  }
  Logger.log({level:"info", message: `Request on ${req.originalUrl}`});
  next();
});

app.use((req, res, next)=>{
  //res.set("Content-Security-Policy", "default-src 'self' style-src https://maxcdn.bootstrapcdn.com https://bulma.io https://cdn.jsdelivr.net"  );
  //res.set("X-Frame-Options","deny");
  next();
});

const notLoggedUser = (req,res, next)=>{

  if(!req.session.user|| req.session.user == undefined){
    
    Logger.log({
      level: 'info',
      message: "No user session found"
    });

    res.status(401).send({"error":"Unauthorized access"});
    return;
  }
  Logger.log({
      level: 'info',
      message: "User session found"
  });
  
  next();
}

app.use("/api", apiRouter);
app.use("/api", userRouter);
app.use("/api",notLoggedUser, brandRouter);
app.use("/api",notLoggedUser, cardTemplateRouter);
app.use("/auth", authRouter);
app.use("/file", fileRouter);


app.get("/signin/:brandId?",(req,res)=>{

 let lang = req.headers["accept-language"];
 if(req.session.user){
    switchSession(req,res, req.session.user);
    return;
  }

  let brandId = req.params.brandId; 
  let title = `Inscripcion a mycard`
  let params = {lang : lang};
  if(brandId){
    title = `Inscribite a la tarjeta de puntos de ${brandId}`;
    params.title = title;
    params.hasMeta = true;
    params.metaTitle = `Inscribite a la tarjeta de puntos de ${brandId}`;
    params.hasInvitation = true;

      Logger.log({
        level:"info",
        message: "Sign in from invitation"
      });
    CardTemplate.findOne({
      where: {value: brandId},
      include: [
      {
        model: dataSource.models.Brand,
        as:'brand',
        required :true
      }]
    }).then((cardTemplate)=>{

      var domain = req.protocol + '://' + req.get('Host');
      if(cardTemplate){
        params.brandName = cardTemplate.brand.name;
        params.metaImage = `${domain}/${cardTemplate.brand.logoURL}`;
        params.brandColor = cardTemplate.brand.brandColor;
      }else{
        Logger.log({
          level:"info",
          message: "Brand of invitation not found or not valid"
        });
      }
      res.render('invitation.pug',params);
    });
    return;
  }
  params.title = title;
  res.render('signin.pug',params);
  
});

app.get("/login", (req, res)=>{
  if(req.session.user){
    switchSession(req,res, req.session.user);
    return;
  }
  let lang = req.headers["accept-language"]
  res.render('login.pug', {title:"Tarjeta de puntos facilmente",  lang : lang});
});



app.get("/admin", (req, res)=>{
  let lang = req.headers["accept-language"]
  res.render('admin.pug', {title:"Point card",lang : lang});
})


app.get("/logout", (req, res)=>{
  if(!req.session){
    res.redirect("/");
    return;
  }
  req.session.destroy(function(err) {
    if(err){
       Logger.log({
        level:"error",
        message: "Error happended destroying the session"
      });
      Logger.log({
        level:"error",
        message: err
      });
    }
  });
  
  res.redirect("/");
});


app.get("/users", (req, res) => {
  dataSource.models.User.findAll()
    .then((users)=>{
        res.status(200).send(users);
    })
 
});





app.use((req,res, next)=>{

  if(req.originalUrl.startsWith("/api")||req.originalUrl.startsWith("/auth")){
    Logger.log({level:"info", message:"Ignoring call to api"})
    next();
    return;
  }
  if(!req.session.user|| req.session.user == undefined){
    
    Logger.log({
      level: 'info',
      message: "No user session found"
    });

    res.redirect("/login");
    return;
  }
  Logger.log({
      level: 'info',
      message: "User session found"
  });
  
  next();
});


app.get("/", (req,res)=>{
  switchSession(req,res, req.session.user);
});


app.get("/index", (req, res)=>{
   let lang = req.headers["accept-language"]
  res.render('index.pug', {title:"Point Card", lang : lang});
})



function switchSession(req, res, user){
   
    Logger.log({
      level: 'info',
      message: `Type of user: ${user.typeOfUser}`
    });

    switch(user.typeOfUser){
        default:
        case 'CLIENT':
          res.redirect('/index');
        break;
        case 'BUSINESS':
          res.redirect('/admin');
        break;
  }
}




startApp();


