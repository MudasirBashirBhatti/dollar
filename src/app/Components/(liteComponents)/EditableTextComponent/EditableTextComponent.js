'use client'
import { useState } from "react";
import styles from '@/app/Components/(liteComponents)/EditableTextComponent/EditableTextComponent.module.css'
export const EditableText = ({ initialText, index, onChange }) => {
    const [text, setText] = useState(initialText);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setText(newValue);
        onChange(index, newValue);
    };

    return (
        <input
            type="text"
            className={styles.input}
            placeholder={initialText}
            onChange={handleChange}
        // value={text}
        />
    );
};

const EditableTextComponent = ({ titleString, onTextChange }) => {
    const parseContent = (content) => {
        const parts = content.split(/(\[[^\]]+\])/g); // Split the content into parts
        return parts.map((part, index) => {
            if (part.match(/\[[^\]]+\]/)) {
                // If the part is inside square brackets
                const text = part.slice(1, -1); // Remove square brackets
                return (
                    <EditableText
                        key={index}
                        initialText={text}
                        index={index}
                        onChange={onTextChange}
                    />
                );
            }
            return (
                <span key={index}>{part}</span>
            );
        });
    };

    return (
        <div>
            {parseContent(titleString)}
        </div>
    );
};

export default EditableTextComponent;