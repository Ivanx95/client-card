
module.exports = function(dataSource, DataTypes){
  const CardTemplate= dataSource.define('CardTemplate', {
    cardId:{ 
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	field: 'CARD_TEMPLATE_ID',
        autoIncrement: true,
        primaryKey:true,
    },
    //uuid identificator
    //whats going to be show in the app
    value: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'VALUE'
    },
    creditPercentage:
    {
         type: DataTypes.DECIMAL(2,2),
         allowNull: true,
         field:'CREDIT_PERCENTAGE'
    },
     redemptionPercentage:
    {
         type: DataTypes.DECIMAL(2,2),
         allowNull: true,
         field:'REDEMPTION_PERCENTAGE'
    }
  },{tableName:'CARD_TEMPLATE',timestamps: false});
  
 console.log("Created users model");
 CardTemplate.associate = (models) =>{
    CardTemplate.belongsTo(models.Brand,{foreignKey: 'BRAND_ID', as :'brand'});
 };
 return CardTemplate;
}