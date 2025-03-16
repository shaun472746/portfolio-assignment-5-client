import React, { useEffect } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Markdown } from 'tiptap-markdown';
import Placeholder from '@tiptap/extension-placeholder';

interface ToolbarProps {
    editor: Editor | null;
}

const Toolbar = ({ editor }: ToolbarProps) => {
    if (!editor) {
        return null;
    }

    return (
        <div style={{ marginBottom: '10px', display: 'flex', gap: '5px' }}>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                Bold
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                Italic
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
                }
            >
                H1
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                    editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
                }
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                Bullet List
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                Ordered List
            </button>
        </div>
    );
};

type EditorType = {
    onChange: (value: string) => void;
    value: string | null;
    className?: string;
};

const TiptapEditor = ({ onChange, value }: EditorType) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Markdown, // Enable markdown support
            Placeholder.configure({
                placeholder: 'Write something... (supports markdown)',
            }),
        ],
        content: value || null, // Set initial content
        onUpdate: ({ editor }) => {
            const markdown = editor.storage.markdown.getMarkdown(); // Get markdown content
            onChange(markdown); // Pass markdown content to parent
        },
    });

    useEffect(() => {
        if (editor && value !== editor.storage.markdown.getMarkdown()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    return (
        <div>
            <Toolbar editor={editor} />
            <EditorContent
                editor={editor}
                style={{ border: '1px solid #d3d3d3', padding: '8px' }}
            />
        </div>
    );
};

export default TiptapEditor;
