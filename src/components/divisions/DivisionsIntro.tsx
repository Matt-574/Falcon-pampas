import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Landmark, Factory, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

const DivisionsIntro: React.FC = () => {
  const { t } = useTranslation();

  const iconStyle = { color: 'var(--color-gold-imperial)', marginBottom: '0.5rem' };

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white-ivory)', color: 'var(--color-blue-deep)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Flow Icons */}
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '2rem', 
            marginBottom: '4rem',
            flexWrap: 'wrap'
        }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Landmark size={32} style={iconStyle} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>FP-CAP</span>
            </motion.div>
            <ArrowRight size={20} style={{ opacity: 0.3 }} />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Factory size={32} style={iconStyle} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>FP-REAL</span>
            </motion.div>
            <ArrowRight size={20} style={{ opacity: 0.3 }} />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Cpu size={32} style={iconStyle} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>FP-TECH</span>
            </motion.div>
            <ArrowRight size={20} style={{ opacity: 0.3 }} />
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TrendingUp size={32} style={iconStyle} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>FP-EQUITY</span>
            </motion.div>
        </div>

        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
          {t('divisions_page.intro.text')}
        </p>

      </div>
    </section>
  );
};

export default DivisionsIntro;
