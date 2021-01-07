import 'react';
import './../components/Articles/ArticleSection'
import './../components/Articles/ArticleTable';
import './../components/Articles/ArticleListItem';
// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
