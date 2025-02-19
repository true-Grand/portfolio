'use client';

import Ballpit from './components/backgrounds/Ballpit/Ballpit'
export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>

      <div style={{position: 'relative', overflow: 'visible', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
  <Ballpit
    count={100}
    gravity={0.8}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
    colors={[224, 77, 126]}
    ambientColor={5573420}

  />
</div>

    </section>



  )
}
