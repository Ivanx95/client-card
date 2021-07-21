
module.exports = function(dataSource, DataTypes){
  const Brand= dataSource.define('Brand', {
    brandId:{ 
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	field: 'BRAND_ID',
        autoIncrement: true,
        primaryKey:true
    },

    name:{ 
    	type: DataTypes.STRING,
    	allowNull: false,
    	field: 'NAME'
    },

    brandColor:{ 
    	type: DataTypes.STRING,
    	field: 'BRAND_COLOR'
    },
    logoURL:{
        type: DataTypes.STRING,
        field: 'LOGO_URL'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'USER_ID' // or true if this association is optional
    },

  },{tableName:'BRAND',timestamps: false});
 console.log("Created brand model");
 
 Brand.associate = (models) =>{
    Brand.belongsTo(models.User, {foreignKey:'userId'});
 };
 return Brand;
}