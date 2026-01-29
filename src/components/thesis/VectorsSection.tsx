import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const VectorsSection: React.FC = () => {
  const { t } = useTranslation();

  const vectors = [
    {
      title: t('thesis_page.vectors.v1_title'),
      text: t('thesis_page.vectors.v1_text'),
      img: "https://images.unsplash.com/photo-1625246333195-bf8f7e710471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Harvest
    },
    {
      title: t('thesis_page.vectors.v2_title'),
      text: t('thesis_page.vectors.v2_text'),
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" /// Oil/Energy
    },
    {
      title: t('thesis_page.vectors.v3_title'),
      text: t('thesis_page.vectors.v3_text'),
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Building
    }
  ];

  return (
    <section>
      {vectors.map((vector, index) => (
        <div 
            key={index}
            style={{ 
                display: 'grid', 
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr', 
                minHeight: '600px',
                direction: index % 2 === 1 ? 'rtl' : 'ltr' // Alternating side
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ 
                    padding: '4rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-white-ivory)',
                    direction: 'ltr' // Reset text direction
                }}
            >
                <h3 style={{ fontSize: '2rem', color: 'var(--color-blue-deep)', marginBottom: '1.5rem' }}>{vector.title}</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>{vector.text}</p>
            </motion.div>
            <div 
                style={{
                    backgroundImage: `url(${vector.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '300px' // For mobile capability if grid breaks
                }} 
            />
        </div>
      ))}
    </section>
  );
};

export default VectorsSection;
