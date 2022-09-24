import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props) {
    return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

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
    const { maxWidth, ...reactMarkdownProps } = props;
    
    const options = {
        overrides: {
            h1: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h4',
                    component: 'h1',
                },
            },
            h2: {
                component: Typography,
                props: { gutterBottom: true, variant: 'h6', component: 'h2' },
            },
            h3: {
                component: Typography,
                props: { gutterBottom: true, variant: 'subtitle1' },
            },
            h4: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'caption',
                    paragraph: true,
                },
            },
            p: {
                component: Typography,
                props: { paragraph: true },
            },
            a: { component: Link },
            li: {
                component: MarkdownListItem,
            },
            img: {
                component: MarkdownImage,
                props: {
                    width: maxWidth
                }
            }
        }
    };

    return <ReactMarkdown options={options} {...reactMarkdownProps} />;
}

export default Markdown;
