import React from 'react';
import Colorbrnad from '../icons/brands';

function Brands(){
    
      const Brands = ["AzureSql","Redshift","Azure","CloudStorage","GoogleStorage","Oracle","Saleforce","snowflake","AWS","SAP"]
     
      const IconSection = ({ title, items }) => {
        const handleIconClick = (nombre) => {
          const iconComponent = `<Colorbrnad name="${nombre}" />`;
          navigator.clipboard.writeText(iconComponent)
            .then(() => {
              alert(`Icono copiado: ${iconComponent}`);
            })
            .catch(err => {
              console.error('Error al copiar el icono: ', err);
            });
        };
      
        return (
          <>
            <h1>{title}</h1>
            <div className='flexicons'>
              {items.map((nombre) => (
                <div className='boxicon' key={nombre} onClick={() => handleIconClick(nombre)}>
                  <div style={{ textAlign: 'center' }}>
                    <div className='icon_box'>
                      <Colorbrnad size="xl" name={nombre} />
                    </div>
                    <span>{nombre}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      };

      return(
      <div className='container'> 
        
        <IconSection title="Brands" items={Brands} />
             
      </div>
      )
}

export default Brands;