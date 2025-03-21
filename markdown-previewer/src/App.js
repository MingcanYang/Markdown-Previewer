import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

const WindowComponent = ({ title, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  const handleMinimize = () => {
    setIsMinimized(prev => !prev);
  };

  const handleMaximize = () => {
    setIsMaximized(prev => !prev);
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div className={`window ${isMaximized ? 'maximized' : ''}`}>
      <div className="window-header">
        <span className="window-title">{title}</span>
        <div className="window-actions">
          <span className="window-btn" onClick={handleMinimize}>—</span>
          <span className="window-btn" onClick={handleMaximize}>□</span>
          <span className="window-btn" onClick={handleClose}>X</span>
        </div>
      </div>
      {!isMinimized && (
        <div className="window-body">
          {children}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`; 
  const [markdown, setMarkdown] = useState(placeholder);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="markdown-previewer">
      {/* Editor Window */}
      <WindowComponent title="Markdown Editor">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
      </WindowComponent>

      {/* Preview Window */}
      <WindowComponent title="Previewer">
        <div
          id="preview"
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </WindowComponent>
    </div>
  );
};

export default App;