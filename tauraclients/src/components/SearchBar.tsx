import React from 'react';

interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Buscar cliente pelo nome..."}: SearchBarProps) => {
    return (
        <div className="w-full mb-6">
            <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-lg 
            shadow-sm focus:outline-double focus:ring-2 focus:ring-blue-500
            dark:bg-gray-800 dark:border0gray-600 dark:placeholder-gray-400
            "
            />
        </div>
    );
};

export default SearchBar;