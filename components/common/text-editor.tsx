'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import BulletList from '@tiptap/extension-bullet-list';
import Color from '@tiptap/extension-color';
import { Heading } from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import FontFamily from '@tiptap/extension-font-family';
import StarterKit from '@tiptap/starter-kit';
import { useCallback, useState } from 'react';
import './text-editor.css';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Strikethrough,
  Type,
  UnderlineIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { fchmod } from 'node:fs';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const fonts = [
  { name: 'Poppins', value: 'poppins' },
  { name: 'Sans-serif', value: 'sans-serif' },
  { name: 'Serif', value: 'serif' },
  { name: 'Monospace', value: 'monospace' },
];

const colors = [
  '#000000',
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
];

export function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const [linkUrl, setLinkUrl] = useState('');
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      BulletList,
      ListItem,
      Heading.configure({ levels: [1, 2, 3, 4] }),
      Text,
      FontFamily,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    editable: true,
    editorProps: {
      transformPastedHTML: (html) => html,
      attributes: {
        class:
          'block min-w-prose min-h-prose focus:outline-none outline-1 border-red-500',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false
  });

  const toggleFormat = useCallback(
    (
      format: 'toggleBold' | 'toggleItalic' | 'toggleStrike' | 'toggleUnderline'
    ) => {
      editor?.chain().focus()[format]().run();
    },
    [editor]
  );

  const setLink = useCallback(() => {
    if (linkUrl === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      editor
        ?.chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: linkUrl })
        .run();
    }
  }, [editor, linkUrl]);

  const setColor = useCallback(
    (color: string) => {
      editor?.chain().focus().setColor(color).run();
    },
    [editor]
  );

  const setFont = useCallback(
    (font: string) => {
      editor?.commands.setFontFamily(font);
    },
    [editor]
  );

  const setTextAlign = useCallback(
    (align: 'left' | 'center' | 'right' | 'justify') => {
      editor?.chain().focus().setTextAlign(align).run();
    },
    [editor]
  );

  const toggleBulletList = useCallback(() => {
    editor?.chain().focus().toggleBulletList().run();
  }, [editor]);

  const orderList = useCallback(() => {
    editor?.chain().focus().toggleOrderedList().run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className={cn(`border rounded-md p-2 space-y-2`, {
      'ring-1 ring-offset-1 ring-ring': editor.isFocused
    })}>
      <div className="flex flex-wrap gap-2 border-b pb-2">
        <Toggle
          size="sm"
          pressed={editor.isActive('bold')}
          onPressedChange={() => toggleFormat('toggleBold')}
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('italic')}
          onPressedChange={() => toggleFormat('toggleItalic')}
          aria-label="Toggle italic"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('strike')}
          onPressedChange={() => toggleFormat('toggleStrike')}
          aria-label="Toggle strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('underline')}
          onPressedChange={() => toggleFormat('toggleUnderline')}
          aria-label="Toggle underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive('bulletList')}
          onPressedChange={() => toggleBulletList()}
          aria-label="Toggle bullet list"
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('orderedList')}
          onPressedChange={() => orderList()}
          aria-label="Toggle ordered list"
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: 'left' })}
          onPressedChange={() => setTextAlign('left')}
          aria-label="Align left"
        >
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: 'center' })}
          onPressedChange={() => setTextAlign('center')}
          aria-label="Align center"
        >
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: 'right' })}
          onPressedChange={() => setTextAlign('right')}
          aria-label="Align right"
        >
          <AlignRight className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: 'justify' })}
          onPressedChange={() => setTextAlign('justify')}
          aria-label="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </Toggle>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-[110px]">
              <Type className="h-4 w-4 mr-2" />
              Font
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[110px] p-0">
            {fonts.map((font) => (
              <Button
                key={font.value}
                variant="ghost"
                onClick={() => setFont(font.value)}
                className="w-full justify-start"
              >
                {font.name}
              </Button>
            ))}
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-[110px]">
              <span
                className="w-4 h-4 rounded-full border mr-2"
                style={{
                  backgroundColor:
                    editor.getAttributes('textStyle').color || '#000000',
                }}
              />
              Color
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[110px] p-0">
            <div className="grid grid-cols-3 gap-1 p-1">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant="ghost"
                  onClick={() => setColor(color)}
                  className="w-full h-8 p-0"
                >
                  <span
                    className="w-full h-full rounded"
                    style={{ backgroundColor: color }}
                  />
                  <span className="sr-only">Set text color to {color}</span>
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-[110px]">
              <LinkIcon className="h-4 w-4 mr-2" />
              Link
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex space-x-2">
              <Input
                type="url"
                placeholder="Paste link"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
              <Button onClick={setLink}>Set Link</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <EditorContent
        editor={editor}
        className="prose max-w-none"
        height={'500px'}
      />
    </div>
  );
}