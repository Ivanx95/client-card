
module.exports = function(dataSource, DataTypes){
  const User= dataSource.define('User', {
    userId:{ 
    	type: DataTypes.INTEGER,
    	field: 'USER_ID',
        autoIncrement: true,
        primaryKey:true
    },

    name:{ 
    	type: DataTypes.STRING(100),
    	allowNull: false,
    	field: 'NAME'
    },


    email:{ 
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'EMAIL'
    },
    
    password:{ 
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'PASSWORD'
    },

    typeOfUser:{ 
    	type: DataTypes.STRING(10),
    	field: 'USER_TYPE_CD'
    }
   
  },
  {tableName:'USR', timestamps: false});

  console.log("Created users model");

  User.associate = (models) =>{
    User.hasMany(models.Card, {as:'cards', foreignKey: 'OWNER_ID'});
  };

 return User;
}