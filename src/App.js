import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const App = () => {
      const codeString = 'padding:20px;'
      return (
            <div className="">
                  <SyntaxHighlighter language="css" style={docco}>
                        {codeString}
                  </SyntaxHighlighter>
            </div>
      )
}

export default App;