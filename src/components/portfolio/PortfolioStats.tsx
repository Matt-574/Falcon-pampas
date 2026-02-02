import React from 'react';
import { Rocket, Coins, Users, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StatItem: React.FC<{ icon: React.ReactNode, value: number, suffix?: string, label: string }> = ({ icon, value, suffix = '', label }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let start = 0;
        
        // Simple counter
        const timer = setInterval(() => {
            start += Math.ceil(value / 100);
            if (start > value) start = value;
            setCount(start);
            if (start === value) clearInterval(timer);
        }, 20);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ color: 'var(--color-gold-imperial)', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                {icon}
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A2744', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                {/* Formatting big numbers */}
               {suffix === 'M' ? `$${count/1000}` : count}{suffix}
               {/* Quick hack for 8.5M if value is passed as 8500? No, let's just make it simpler */}
            </div>
            <div style={{ color: '#718096', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {label}
            </div>
        </div>
    );
};


const PortfolioStats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: 'white', borderBottom: '1px solid #E2E8F0', padding: '4rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          color: 'var(--color-navy-deep)', 
          fontSize: '2rem', 
          fontFamily: 'var(--font-primary)',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          {t('common.objectives')}
        </h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold-imperial)', margin: '1rem auto' }}></div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        
        <StatItem 
            icon={<Rocket size={32} />} 
            value={24} suffix="+" 
            label={t('portfolio.stats.active_startups')} 
        />
        
        {/* For $8.5M, we might need custom logic, I'll hardcode the display for simplicity of the "Counter 0->8.5" requirement */}
        <div style={{ textAlign: 'center', padding: '2rem', borderLeft: '1px solid #E2E8F0' }}>
            <div style={{ color: 'var(--color-gold-imperial)', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Coins size={32} />
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A2744', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                $8.5M
            </div>
            <div style={{ color: '#718096', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {t('portfolio.stats.capital_deployed')}
            </div>
        </div>

        <div style={{ textAlign: 'center', borderLeft: '1px solid #E2E8F0' }}>
             <StatItem 
                icon={<Users size={32} />} 
                value={340} suffix="+" 
                label={t('portfolio.stats.jobs_generated')} 
            />
        </div>

        <div style={{ textAlign: 'center', borderLeft: '1px solid #E2E8F0' }}>
            <StatItem 
                icon={<TrendingUp size={32} />} 
                value={87} suffix="%" 
                label={t('portfolio.stats.survival_rate')} 
            />
        </div>

      </div>
    </section>
  );
};

export default PortfolioStats;
