import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <div className="features-section py-5 bg-light">
      <div className="container">
        
        <div className="row text-section">
          <div className="col-md-4 mb-4">
            <img src="https://via.placeholder.com/150" alt="Placeholder" className="img-fluid mb-3" />
          </div>
          <div className="col-md-8">
            <h2>Text Section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae turpis nec sapien bibendum tincidunt. Sed lacinia turpis a ligula malesuada, quis interdum urna venenatis. Suspendisse potenti.</p>
            <p>Quisque consequat libero id magna porttitor, ac auctor nisl fermentum. Duis bibendum dictum nisi, nec tempor felis pulvinar nec. Integer non dictum lacus. Maecenas id dui eu odio tincidunt consectetur et et erat.</p>
          </div>
        </div>
        <div className="row text-section">
          <div className="col-md-8">
            <h2>Text Section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae turpis nec sapien bibendum tincidunt. Sed lacinia turpis a ligula malesuada, quis interdum urna venenatis. Suspendisse potenti.</p>
            <p>Quisque consequat libero id magna porttitor, ac auctor nisl fermentum. Duis bibendum dictum nisi, nec tempor felis pulvinar nec. Integer non dictum lacus. Maecenas id dui eu odio tincidunt consectetur et et erat.</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src="https://via.placeholder.com/150" alt="Placeholder" className="img-fluid mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
