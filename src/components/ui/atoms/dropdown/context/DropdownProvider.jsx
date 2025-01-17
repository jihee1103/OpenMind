/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useCallback, useContext, useState } from 'react';

import { css } from 'styled-components';

import { useCloseModal } from '@hooks/useCloseModal';

const DropdownContext = createContext();

const DropdownProvider = ({ children }) => {
  const { toggleModal: toggleDropdown, isModalOpen: isDropdownOpen, modalRef: dropdownRef } = useCloseModal();
  const [selectedOption, setSelectedOption] = useState();

  const changeSelectedOption = useCallback(
    (selectedOptionText) => {
      setSelectedOption(selectedOptionText);
      toggleDropdown();
    },
    [toggleDropdown],
  );

  return (
    <DropdownContext.Provider value={{ isOpen: isDropdownOpen, toggleDropdown, selectedOption, changeSelectedOption }}>
      <div
        ref={dropdownRef}
        css={css`
          position: relative;
          display: flex;
          align-items: center;
        `}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;

export const useDropdownProvider = () => {
  const context = useContext(DropdownContext);

  if (context === undefined) throw new Error('useDropdownProvider는 DropdownProvider 내부에서만 사용할 수 있습니다.');

  return context;
};
