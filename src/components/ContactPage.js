import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="container u-padding-bottom-large">
    <p className="info">
    My personal blog, as well as an archive of my projects, can be found on my personal site <Link to="https://davidhide.com" rel="noopener" target="_blank">davidhide.com</Link>.<br /><br />
    You can follow me, and message me if you wish, on the following sites:
<br /><br />
<Link to="https://github.com/dlh89" rel="noopener" target="_blank">GitHub</Link><br />
<Link to="https://www.linkedin.com/in/david-hide-b2633b168/" rel="noopener" target="_blank">LinkedIn</Link><br />
<Link to="https://twitter.com/undanator" rel="noopener" target="_blank">Twitter</Link><br />
<Link to="https://codepen.io/dlh89/" rel="noopener" target="_blank">CodePen</Link><br />
    </p>
  </div>
);

export default NotFoundPage;
