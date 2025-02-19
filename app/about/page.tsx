'use client';
import Ballpit from '../components/backgrounds/Ballpit/Ballpit';
import AboutLayout from './layout';

const Page = () => {
  return (
    <div style={{ position: 'relative', overflow: 'visible', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
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
  );
};

Page.getLayout = function getLayout(page) {
  return (
    <AboutLayout>
      {page}
    </AboutLayout>
  );
};

export default Page;