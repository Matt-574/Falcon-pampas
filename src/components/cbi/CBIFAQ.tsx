import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const CBIFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Puedo recuperar mi inversión?",
      answer: "Sí. Después del período mínimo de permanencia de 3 años, puedes optar por liquidar tu posición. Los fondos retornan a tu cuenta original junto con los rendimientos acumulados, siempre respetando las normativas de salida de divisas vigentes."
    },
    {
      question: "¿Necesito hablar español para aplicar?",
      answer: "No es un requisito legal para la residencia permanente ni para la ciudadanía en primera instancia. El proceso de inversión y legal se puede gestionar 100% en inglés con nuestro equipo."
    },
    {
      question: "¿Qué garantías tengo sobre el capital?",
      answer: "Tu inversión se canaliza a través de un Fideicomiso Financiero regulado por la CNV y registrado como vehículo RICE ante el Ministerio de Economía. Cuenta con auditoría externa (Big Four) y custodia segregada de activos."
    },
    {
      question: "¿Mis hijos obtienen la ciudadanía automáticamente?",
      answer: "Los hijos menores de 18 años pueden ser incluidos en tu aplicación de ciudadanía derivada una vez que tú (el inversor principal) la obtengas. El proceso es administrativo y mucho más rápido."
    },
    {
      question: "¿Qué diferencia tiene con otros programas CBI (Caribe/Europa)?",
      answer: "A diferencia de los programas del Caribe que son 'donaciones' a fondo perdido, en Argentina realizas una inversión productiva con potencial de retorno. Comparado con Europa (Golden Visas), el ticket es menor y el camino a ciudadanía es más rápido (2 años vs 5-10 años)."
    }
  ];

  return (
    <section style={{ backgroundColor: 'white', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', textAlign: 'center', marginBottom: '3rem' }}>
          Preguntas Frecuentes
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 500, color: '#1A2744' }}>{faq.question}</span>
                <span style={{ color: 'var(--color-gold-imperial)' }}>
                  {openIndex === index ? <X size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: '#4A5568', lineHeight: 1.6, paddingBottom: '1rem' }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CBIFAQ;
