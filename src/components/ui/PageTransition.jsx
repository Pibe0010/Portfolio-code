import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PageTransition.css';

/**
 * PageTransition - Animated page wrapper component
 * @param {ReactNode} children - Page content
 */
export const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Trigger animation on route change
    setDisplayChildren(null);
    setTimeout(() => {
      setDisplayChildren(children);
    }, 50);
  }, [location.pathname]);

  if (!displayChildren) {
    return null;
  }

  return (
    <div className="page-transition-wrapper">
      {displayChildren}
    </div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;