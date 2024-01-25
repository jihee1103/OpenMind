import { device } from '@device/mediaBreakpoints';
import styled, { css } from 'styled-components';

import { ReactComponent as LeftArrow } from '@assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '@assets/right-arrow.svg';

const PageTurnner = ({
  currentPagesList,
  changePage,
  jumpToPreviousPages,
  jumpToNextPages,
  currentPage,
  pagesPerScreen,
  itemsPerPage,
  listCount,
}) => {
  return (
    <StPageTurnner>
      {Math.ceil(currentPage / pagesPerScreen) !== 1 && (
        <StIconAlignButton onClick={jumpToPreviousPages}>
          <StLeftArrow width={8} height={9} />
        </StIconAlignButton>
      )}
      {currentPagesList.map((v) => (
        <StPaginationNumberButton
          $currentPage={currentPage === v}
          key={v}
          value={v}
          onClick={(e) => changePage(e.target.value)}
        >
          {v}
        </StPaginationNumberButton>
      ))}
      {listCount > Math.ceil(currentPage / pagesPerScreen) * pagesPerScreen * itemsPerPage && (
        <StIconAlignButton onClick={jumpToNextPages}>
          <StRightArrow width={8} height={9} />
        </StIconAlignButton>
      )}
    </StPageTurnner>
  );
};

export default PageTurnner;

const StIconAlignButton = styled.button.attrs({
  type: 'button',
})`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StPaginationNumberButton = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Actor', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem; /* 125% */
  color: ${({ theme, $currentPage }) => ($currentPage ? theme.color.Brown[40] : theme.color.Grayscale[40])};
  &:hover {
    color: ${({ theme }) => theme.color.Brown[40]};
  }
`;

const arrowIconTheme = css`
  cursor: pointer;
  fill: ${({ theme }) => theme.color.Grayscale[40]};

  &:hover {
    fill: ${({ theme }) => theme.color.Brown[40]};
  }
`;

const StLeftArrow = styled(LeftArrow)`
  ${arrowIconTheme}
`;

const StRightArrow = styled(RightArrow)`
  ${arrowIconTheme}
`;

const StPageTurnner = styled.div`
  display: flex;
  align-items: center;
  margin-inline: auto;
  text-align: center;
  width: fit-content;
  margin-inline: auto;

  padding-bottom: 3.9rem;

  @media ${device.tablet} {
    padding-bottom: 7.6rem;
  }

  /* 18.6rem(width) * 4 + 3.2rem(padding) * 2 + 2rem(gap) * 3 = 86.8rem */
  @media screen and (min-width: 868px) {
    padding-bottom: 9.1rem;
  }

  @media ${device.pc} {
    padding-bottom: 9.7rem;
  }
`;
