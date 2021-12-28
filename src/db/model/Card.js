
module.exports = function(dataSource, DataTypes){
  const Card= dataSource.define('Card', {
    cardId:{ 
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	field: 'CARD_ID',
        autoIncrement: true,
        primaryKey:true,
    },
    level:{ 
    	type: DataTypes.INTEGER,
    	allowNull: true,
    	field: 'LEVEL'
    },
    points : {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'POINTS'
    },
    enable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true 
    },
    //uuid identificator
    //whats going to be show in the app
    value: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'VALUE'
    },
  },{tableName:'CARD',timestamps: false});
  
 console.log("Created users model");
 Card.associate = (models) =>{
    Card.belongsTo(models.User,{foreignKey: 'OWNER_ID'});
    Card.belongsTo(models.CardTemplate, {foreignKey: 'CARD_TEMPLATE_ID', as :'template'});
  
 };
 return Card;
}