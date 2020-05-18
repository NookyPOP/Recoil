(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{112:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(1),a=o(6),i=(o(0),o(150)),r={title:"Bonus: Performance"},c={id:"basic-tutorial/performance",title:"Bonus: Performance",description:"Our existing implementation is perfectly valid, but there are some important performance implications to consider as our app evolves from being a small toy project to a million-line corporate program.",source:"@site/docs/basic-tutorial/performance.md",permalink:"/docs/basic-tutorial/performance",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/basic-tutorial/performance.md"},l=[{value:"<code>&lt;TodoList /&gt;</code>",id:"todolist-",children:[]},{value:"<code>&lt;TodoItem /&gt;</code>",id:"todoitem-",children:[]},{value:"<code>&lt;TodoItemCreator /&gt;</code>",id:"todoitemcreator-",children:[]},{value:"<code>&lt;TodoListFilters /&gt;</code>",id:"todolistfilters-",children:[]},{value:"<code>&lt;TodoListStats /&gt;</code>",id:"todoliststats-",children:[]},{value:"Room for Improvement",id:"room-for-improvement",children:[]},{value:"Optimization #1: <code>React.memo()</code>",id:"optimization-1-reactmemo",children:[]},{value:"Optimization #2: <code>atomFamily()</code>",id:"optimization-2-atomfamily",children:[{value:"Rethinking State Shape",id:"rethinking-state-shape",children:[]},{value:"<code>atomFamily()</code>",id:"atomfamily",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Our existing implementation is perfectly valid, but there are some important performance implications to consider as our app evolves from being a small toy project to a million-line corporate program."),Object(i.b)("p",null,"Let's think about what will cause each of our components to re-render:"),Object(i.b)("h3",{id:"todolist-"},Object(i.b)("inlineCode",{parentName:"h3"},"<TodoList />")),Object(i.b)("p",null,"This component is subscribed to ",Object(i.b)("inlineCode",{parentName:"p"},"filteredTodoListState"),", which is a selector that has a dependency on ",Object(i.b)("inlineCode",{parentName:"p"},"todoListState")," and ",Object(i.b)("inlineCode",{parentName:"p"},"todoListFilterState"),". This means ",Object(i.b)("inlineCode",{parentName:"p"},"TodoList")," will re-render when the following state changes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"todoListState")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"todoListFilterState"))),Object(i.b)("h3",{id:"todoitem-"},Object(i.b)("inlineCode",{parentName:"h3"},"<TodoItem />")),Object(i.b)("p",null,"This component is subscribed to ",Object(i.b)("inlineCode",{parentName:"p"},"todoListState"),", so it will re-render whenever ",Object(i.b)("inlineCode",{parentName:"p"},"todoListState")," changes and whenever its parent component, ",Object(i.b)("inlineCode",{parentName:"p"},"TodoList"),", re-renders."),Object(i.b)("h3",{id:"todoitemcreator-"},Object(i.b)("inlineCode",{parentName:"h3"},"<TodoItemCreator />")),Object(i.b)("p",null,"This component is not subscribed to Recoil state (",Object(i.b)("inlineCode",{parentName:"p"},"useSetRecoilState()")," does not create a subscription), so it will only re-render when its parent component, ",Object(i.b)("inlineCode",{parentName:"p"},"TodoList"),", re-renders."),Object(i.b)("h3",{id:"todolistfilters-"},Object(i.b)("inlineCode",{parentName:"h3"},"<TodoListFilters />")),Object(i.b)("p",null,"This component is subcribed to ",Object(i.b)("inlineCode",{parentName:"p"},"todoListFilterState"),", so it will re-render when either that state changes or when its parent component, ",Object(i.b)("inlineCode",{parentName:"p"},"TodoList"),", re-renders."),Object(i.b)("h3",{id:"todoliststats-"},Object(i.b)("inlineCode",{parentName:"h3"},"<TodoListStats />")),Object(i.b)("p",null,"This component is subscribed to ",Object(i.b)("inlineCode",{parentName:"p"},"filteredTodoListState"),", so it will re-render whenever that state changes or when its parent component, ",Object(i.b)("inlineCode",{parentName:"p"},"TodoList"),", re-renders."),Object(i.b)("h2",{id:"room-for-improvement"},"Room for Improvement"),Object(i.b)("p",null,"The existing implementation has a few drawbacks, mainly that fact that we are re-rendering the entire tree whenever we make any change to ",Object(i.b)("inlineCode",{parentName:"p"},"todoListState")," due to the fact that ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoList />")," is the parent of all of our components, so when it re-renders so will all of its children."),Object(i.b)("p",null,"Ideally, components would re-render only when they absolutely have to (when the data that they display on the screen has changed)."),Object(i.b)("h2",{id:"optimization-1-reactmemo"},"Optimization #1: ",Object(i.b)("inlineCode",{parentName:"h2"},"React.memo()")),Object(i.b)("p",null,"To mitigate the issue of child components re-rendering unnecessarily, we can make use of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactmemo"}),Object(i.b)("inlineCode",{parentName:"a"},"React.memo()")),", which memoizes a component based on the ",Object(i.b)("strong",{parentName:"p"},"props")," passed to that component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const TodoItem = React.memo(({item}) => ...);\n\nconst TodoItemCreator = React.memo(() => ...);\n\nconst TodoListFilters = React.memo(() => ...);\n\nconst TodoListStats = React.memo(() => ...);\n")),Object(i.b)("p",null,"That helps with the re-renders of ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoItemCreator />")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoListFilters />")," as they no longer re-render in response to re-renders of their parent component, ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoList />"),", but we still have the problem of ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoItem />")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoListStats />")," re-rendering when individual todo items have their text changed as text changes will result in a new ",Object(i.b)("inlineCode",{parentName:"p"},"todoListFilterState"),", which both ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoItem />")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoListStats />")," are subscribed to."),Object(i.b)("h2",{id:"optimization-2-atomfamily"},"Optimization #2: ",Object(i.b)("inlineCode",{parentName:"h2"},"atomFamily()")),Object(i.b)("h3",{id:"rethinking-state-shape"},"Rethinking State Shape"),Object(i.b)("p",null,"Thinking of a todo list as an array of objects is problematic because it forms a tight coupling between each individual todo item and the list of all todo items."),Object(i.b)("p",null,"To fix this issue, we need to rethink our state shape by thinking about ",Object(i.b)("strong",{parentName:"p"},"normalized state"),". In the context of our todo-list app, this means storing the ",Object(i.b)("strong",{parentName:"p"},"list")," of item ids separately from the ",Object(i.b)("strong",{parentName:"p"},"data")," for each invididual item."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For a more detailed discussion on how to think about normalized state, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape"}),"this page from the Redux documentation"),".")),Object(i.b)("p",null,"This ultimately means that we will be splitting our ",Object(i.b)("inlineCode",{parentName:"p"},"todoListState")," into two:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An array of todo item IDs"),Object(i.b)("li",{parentName:"ul"},"A mapping of item ID to item data")),Object(i.b)("p",null,"The array of todo item IDs can be implemented using an atom like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const todoListItemIdsState = atom({\n  key: 'todoListItemIdsState',\n  default: [],\n});\n")),Object(i.b)("p",null,"For implementing a mapping of item ID to item data, Recoil provides a utility method that allows us to dynamically create a mapping from ID to atom. This utlity is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/utils/atomFamily"}),Object(i.b)("inlineCode",{parentName:"a"},"atomFamily()")),"."),Object(i.b)("h3",{id:"atomfamily"},Object(i.b)("inlineCode",{parentName:"h3"},"atomFamily()")),Object(i.b)("p",null,"We use the ",Object(i.b)("inlineCode",{parentName:"p"},"atomFamily()")," function"))}p.isMDXComponent=!0},150:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return u}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c({},t,{},e)),o},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(o),b=n,u=d["".concat(r,".").concat(b)]||d[b]||m[b]||i;return o?a.a.createElement(u,c({ref:t},s,{components:o})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=o[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);