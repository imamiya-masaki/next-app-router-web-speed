"use client"
import React, { ReactNode, useState } from 'react';

import { COMPANY } from '../constants/Company';
import { CONTACT } from '../constants/Contact';
import { OVERVIEW } from '../constants/Overview';
import { QUESTION } from '../constants/Question';
import { TERM } from '../constants/Term';
import { Color, Space, Typography } from '../styles/variables';

import { Box } from './Box';
import { Button } from './Button';
import { Flex } from './Flex';
import { Spacer } from './Spacer';
import { Text } from './Text';

import { SvgIcon } from '../../features/icons/components/SvgIcon';


const ContentDom: React.FC<{children: ReactNode, role: string}> = ({role, children}) => {
  return <section style={{"whiteSpace": "pre-line"}} role={role}>{children}</section>
}

export const Footer: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<JSX.Element | undefined>(undefined);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  
  const termDialogA11yId = 'termDialogA11yId';
  const contactDialogA11yId = 'contactDialogA11yId';
  const questionDialogA11yId = 'questionDialogA11yId';
  const companyDialogA11yId = 'companyDialogA11yId';
  const overviewDialogA11yId = 'overviewDialogA11yId';

  const handleRequestToTermDialogOpen = () => {
    openDialog()
    setDialogContent(
      <ContentDom aria-labelledby={termDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={termDialogA11yId} typography={Typography.NORMAL16}>
          利用規約
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {TERM}
        </Text>
      </ContentDom>,
    );
  };

  const handleRequestToContactDialogOpen = () => {
    openDialog()
    setDialogContent(
      <ContentDom aria-labelledby={contactDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={contactDialogA11yId} typography={Typography.NORMAL16}>
          お問い合わせ
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {CONTACT}
        </Text>
      </ContentDom>,
    );
  };

  const handleRequestToQuestionDialogOpen = () => {
    openDialog()
    setDialogContent(
      <ContentDom aria-labelledby={questionDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={questionDialogA11yId} typography={Typography.NORMAL16}>
          Q&A
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {QUESTION}
        </Text>
      </ContentDom>,
    );
  };

  const handleRequestToCompanyDialogOpen = () => {
    openDialog()
    setDialogContent(
      <ContentDom aria-labelledby={companyDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={companyDialogA11yId} typography={Typography.NORMAL16}>
          運営会社
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {COMPANY}
        </Text>
      </ContentDom>,
    );
  };

  const handleRequestToOverviewDialogOpen = () => {
    openDialog()
    setDialogContent(
      <ContentDom aria-labelledby={overviewDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={overviewDialogA11yId} typography={Typography.NORMAL16}>
          Cyber TOONとは
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {OVERVIEW}
        </Text>
      </ContentDom>,
    );
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  };
  
  const wrapperStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `calc(100% - ${Space * 8}px)`,
    maxWidth: '480px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
  };
  
  const containerStyle: React.CSSProperties = {
    padding: `${Space * 2}px`,
    borderRadius: '4px',
    backgroundColor: Color.MONO_A,
    height: '540px',
    overflow: 'scroll',
  };
  const Overlay:React.FC<{children: ReactNode}> = ({ children }) => (
    <div style={overlayStyle}>{children}</div>
  );
  
  const Wrapper: React.FC<{children: ReactNode}> = ({ children }) => (
    <div style={wrapperStyle}>{children}</div>
  );
  
  const Container: React.FC<{children: ReactNode}> = ({ children }) => (
    <div style={containerStyle}>{children}</div>
  );

  return (
    <>
    <dialog  open={isOpen} onClose={closeDialog} style={overlayStyle}>
      <Wrapper>
        <Button addStyle={{"borderRadius": "50%", "height": "32px", "width": "32px", "position": "absolute", top: `-${Space * 5}px`, left: `-${Space * 5}px`}} onClick={() => {closeDialog();setDialogContent(undefined)}}>
          <SvgIcon color={Color.MONO_A} height={32} type="Close" width={32} />
        </Button>
        <Container>{dialogContent}</Container>
      </Wrapper>
    </dialog>
    <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
      <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
        <img alt="Cyber TOON" src="/assets/cyber-toon.png" width={189} height={45}/>
        <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToTermDialogOpen}>
            利用規約
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToContactDialogOpen}>
            お問い合わせ
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToQuestionDialogOpen}>
            Q&A
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToCompanyDialogOpen}>
            運営会社
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToOverviewDialogOpen}>
            Cyber TOONとは
          </Button>
        </Flex>
      </Flex>
    </Box>
    </>
  );
};
