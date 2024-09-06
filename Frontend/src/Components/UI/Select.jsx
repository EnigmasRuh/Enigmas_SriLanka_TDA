import React, { useState, useEffect, useRef } from "react";
import { HiOutlineX, HiOutlineChevronDown } from "react-icons/hi";

const Select = ({
    input,
    handleChange,
    inputClassName = "",
    labelClassName = "",
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [placeHolder, setPlaceHolder] = useState(
        input.placeHolder ? input.placeHolder : "Search"
    );
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const error = input.error;

    const dropdownRef = useRef(null);

    const filteredOptions = input.optList
        ? input.optList.filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : [];

    const getInputClassList = () => {
        let classes =
            "px-4 appearance-none transition duration-300 ease-in-out focus:outline-none focus:ring-0 border mb-2 border-border-base rounded-md focus:border-green-500 h-12 relative bg-black text-white ";

        classes += error ? " border-red-500" : "";
        classes += inputClassName;

        return classes;
    };

    const getLabelClassList = () => {
        let classes = "mb-2 text-white ";

        classes += labelClassName;

        return classes;
    };

    const handleOutsideClick = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative flex flex-col w-full mb-1">
            {input.label && (
                <label className={getLabelClassList()}>
                    {input.label}
                    {input.required && (
                        <span className="ml-2 text-red-500">*</span>
                    )}
                </label>
            )}

            <div className="relative inline-block w-full " ref={dropdownRef}>
                <input
                    type="text"
                    className={`w-full ${getInputClassList()}`}
                    placeholder={placeHolder}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setDropdownOpen(true);
                    }}
                    onFocus={() => setDropdownOpen(true)}
                />

                {(input.data || searchTerm.length !== 0) && (
                    <span
                        className="absolute text-white cursor-pointer right-10 top-4"
                        onClick={() => {
                            setSearchTerm("");
                            setPlaceHolder(input.placeHolder || "Search");
                            handleChange({
                                ...input,
                                data: null,
                            });
                        }}
                    >
                        <HiOutlineX />
                    </span>
                )}

                <span className="absolute text-white cursor-pointer right-3 top-4">
                    <HiOutlineChevronDown />
                </span>

                {isDropdownOpen && (
                    <div className="absolute z-10 flex flex-col w-full overflow-y-auto bg-black border max-h-48 border-slate-200">
                        {filteredOptions.map((item) => (
                            <span
                                className="px-3 py-3 hover:bg-gray-700 text-white transition smooth border-b-[1px] cursor-pointer w-full"
                                onClick={() => {
                                    handleChange({ ...input, data: item.id });
                                    setPlaceHolder(item.title);
                                    setSearchTerm("");
                                    setDropdownOpen(false);
                                }}
                                key={item.id}
                            >
                                {item.title}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {error && <p className="block text-red-500">{error}</p>}
        </div>
    );
};

export default Select;