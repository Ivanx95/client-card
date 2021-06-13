
module.exports = function(dataSource, DataTypes){
  const Card= dataSource.define('Card', {
    cardId:{ 
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	field: 'CARD_ID',
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
    value: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'VALUE'
    },
    creditPercentage:
    {
         type: DataTypes.DECIMAL(0,2),
         allowNull: true,
         field:'CREDIT_PERCENTAGE'
    },
     redemptionPercentage:
    {
         type: DataTypes.DECIMAL(0,2),
         allowNull: true,
         field:'REDEMPTION_PERCENTAGE'
    }
  },{tableName:'CARD',timestamps: false});
  
 console.log("Created users model");
 Card.associate = (models) =>{
    Card.belongsTo(models.User,{foreignKey: 'OWNER_ID'});
    Card.belongsTo(models.Brand, {foreignKey: 'BRAND_ID', as :'brand'});
  
 };
 return Card;
}