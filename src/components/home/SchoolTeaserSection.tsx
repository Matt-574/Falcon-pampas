import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SchoolTeaserSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section style={{ 
      backgroundColor: '#000', 
      color: 'white', 
      padding: '6rem 2rem', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Background Image Placeholder */}
      <div style={{
         position: 'absolute',
         inset: 0,
         opacity: 0.3,
         background: 'linear-gradient(to right, #000 0%, transparent 100%), url("/images/school-bg-new.jpg")', 
         backgroundSize: 'cover',
         backgroundPosition: 'center'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '600px' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-block', 
              backgroundColor: 'var(--color-gold-imperial)', 
              color: '#000', 
              fontWeight: 700, 
              padding: '4px 12px', 
              borderRadius: '4px',
              marginBottom: '1.5rem',
              fontSize: '0.8rem',
              letterSpacing: '1px'
            }}
          >
            {t('school_teaser.badge')}
          </motion.div>

          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}
             dangerouslySetInnerHTML={{ __html: t('school_teaser.title').replace('Escuela de', 'Escuela de<br/>').replace('School of', 'School of<br/>') }} // Simple hack for line break if needed, or just let it flow. The original had <br/>. I'll rely on text flow or use a Trans component if complex. For now, simple standard rendering or use a <br/> in standard text? I'll remove the manual replace hack and just render title. If new line is desired, I can use CSS max-width or just text. The design had <br/>.
          >
          </motion.h2>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
             {t('school_teaser.title')}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: 1.6 }}
          >
            {t('school_teaser.desc')}
          </motion.p>

          <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
            {[
              t('school_teaser.items.0'),
              t('school_teaser.items.1'),
              t('school_teaser.items.2')
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-gold-imperial)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>

          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             style={{
               display: 'flex',
               alignItems: 'center',
               gap: '1rem',
               backgroundColor: 'var(--color-white)',
               color: 'var(--color-navy-deep)',
               padding: '1rem 2rem',
               border: 'none',
               borderRadius: '4px',
               fontWeight: 700,
               fontSize: '1rem',
               cursor: 'pointer'
             }}
          >
            <Play size={20} fill="currentColor" /> {t('school_teaser.cta')}
          </motion.button>

          <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', opacity: 0.6 }}>
            {t('school_teaser.social_proof')}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolTeaserSection;
