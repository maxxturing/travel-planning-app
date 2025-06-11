import { useState } from 'react'

export default function HomePage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const features = [
    { 
      id: 'trips', 
      title: 'Trip Management', 
      icon: '✈️', 
      description: 'Create, edit, and organize your travel plans',
      status: 'Planned for Task 8-11'
    },
    { 
      id: 'packing', 
      title: 'Smart Packing Lists', 
      icon: '🎒', 
      description: 'Never forget essentials with intelligent packing lists',
      status: 'Planned for Task 12-15'
    },
    { 
      id: 'progress', 
      title: 'Progress Tracking', 
      icon: '📊', 
      description: 'Visual progress indicators for packing completion',
      status: 'Utility functions ready!'
    },
    { 
      id: 'universal', 
      title: 'Universal App', 
      icon: '📱', 
      description: 'Works seamlessly on web, iOS, and Android',
      status: 'Solito foundation complete!'
    }
  ]

  const techStack = [
    { name: 'TypeScript', description: 'Type-safe development', status: '✅ Configured' },
    { name: 'Solito', description: 'Universal React Native + Next.js', status: '✅ Set up' },
    { name: 'Tamagui', description: 'Universal design system', status: '⏳ Task 2' },
    { name: 'Drizzle ORM', description: 'Type-safe database queries', status: '✅ Schema ready' },
    { name: 'React Query', description: 'Server state management', status: '✅ Configured' },
    { name: 'SQLite', description: 'Local database', status: '✅ Schema defined' }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          margin: '0 0 1rem 0', 
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          🌍 Travel Planning App
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Your universal travel companion built with cutting-edge technology
        </p>
        
        {/* Demo Status Badge */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255,255,255,0.2)',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          fontSize: '0.9rem',
          fontWeight: '500',
          marginBottom: '2rem'
        }}>
          🚀 Task 1 Complete - Foundation Ready!
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ padding: '0 2rem 3rem 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
          ✨ Planned Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              style={{
                backgroundColor: selectedFeature === feature.id ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.15)',
                padding: '1.5rem',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{feature.title}</h3>
              <p style={{ margin: '0 0 1rem 0', opacity: 0.9, fontSize: '0.9rem' }}>{feature.description}</p>
              <div style={{
                fontSize: '0.8rem',
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '0.3rem 0.6rem',
                borderRadius: '15px',
                display: 'inline-block'
              }}>
                {feature.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{ 
        backgroundColor: 'rgba(0,0,0,0.2)', 
        padding: '3rem 2rem',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
          🛠️ Technology Stack
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {techStack.map((tech, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', fontSize: '1rem' }}>{tech.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>{tech.description}</p>
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{tech.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Structure */}
      <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
          📁 Monorepo Architecture
        </h2>
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'left',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '0.9rem'
        }}>
          <div>packages/</div>
          <div>├── 📱 app/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Navigation & business logic</div>
          <div>├── 🎨 ui/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Universal Tamagui components</div>
          <div>├── 🗄️ db/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Drizzle schema & queries</div>
          <div>└── ⚙️ config/ &nbsp;&nbsp;# Shared configuration</div>
          <br />
          <div>apps/</div>
          <div>├── 🌐 next/ &nbsp;&nbsp;&nbsp;# Web application</div>
          <div>└── 📱 expo/ &nbsp;&nbsp;&nbsp;# Mobile application</div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => {
            console.log('🎯 Demo: Ready for Task 2 - Development Environment Setup!')
            alert('🚀 Foundation complete!\n\nNext: Task 2 - Configure Development Environment\n- Enable Tamagui styling\n- Set up proper navigation\n- Implement UI components')
          }}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          🎯 Ready for Task 2!
        </button>
      </div>
    </div>
  )
}