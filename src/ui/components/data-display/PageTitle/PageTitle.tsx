import React from "react";

import {
  PageTitleStyled,
  PageSubTitleStyled,
  PageTitleContainer,
} from "./PageTitle.style";

interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({title, subtitle}) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubTitleStyled>{subtitle}</PageSubTitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
