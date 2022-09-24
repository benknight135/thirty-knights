import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';

function MarkdownImage(props) {
    const { alt, src, title, width } = props;
    return (
        <img 
            alt={alt} 
            src={src} 
            title={title} 
            style={ {width: width} }  />
    );
  };

function Markdown (props) {
    const { width, ...reactMarkdownProps } = props;
    
    const options = {
        overrides: {
            img: {
                component: MarkdownImage,
                props: {
                    width: width
                }
            }
        }
    };

    return (
        <ReactMarkdown
            options={options}
            {...reactMarkdownProps}
        />
    );
}

export default Markdown;
