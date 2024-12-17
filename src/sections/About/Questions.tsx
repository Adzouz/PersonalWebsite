// Libraries
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { IQuestion } from '../../types';

// Components
import {
  CanadaFlag,
  FranceFlag,
  SpainFlag,
  UKFlag,
} from '../../components/Languages';
import { SUPINFOLogo, UbisoftOnlineServicesLogo } from '../../components/Logos';
import {
  ReactIcon,
  SassIcon,
  SFCCIcon,
  TurborepoIcon,
  ViteIcon,
} from '../../components/Icons';

// Styles
import styles from './About.module.scss';

const Questions = () => {
  const { t } = useTranslation();
  const keyPrefix = 'sections.about.questions';
  const questions: IQuestion[] = useMemo(
    () => [
      {
        question: t(`${keyPrefix}.0.question`),
        answer: t(`${keyPrefix}.0.answer`),
        itemType: 'flag',
        items: [
          {
            element: <FranceFlag />,
          },
          {
            element: <CanadaFlag />,
          },
        ],
      },
      {
        question: t(`${keyPrefix}.1.question`),
        answer: t(`${keyPrefix}.1.answer`),
        itemType: 'percentage',
        items: [
          {
            element: <FranceFlag />,
            percentage: 100,
          },
          {
            element: <UKFlag />,
            percentage: 80,
          },
          {
            element: <SpainFlag />,
            percentage: 40,
          },
        ],
      },
      {
        question: t(`${keyPrefix}.2.question`),
        answer: t(`${keyPrefix}.2.answer`),
        itemType: 'logo',
        items: [
          {
            element: <SUPINFOLogo />,
          },
        ],
      },
      {
        question: t(`${keyPrefix}.3.question`),
        answer: t(`${keyPrefix}.3.answer`),
        itemType: 'logo',
        items: [
          {
            element: <UbisoftOnlineServicesLogo />,
          },
        ],
      },
      {
        question: t(`${keyPrefix}.4.question`),
        answer: t(`${keyPrefix}.4.answer`),
      },
      {
        question: t(`${keyPrefix}.5.question`),
        answer: t(`${keyPrefix}.5.answer`),
        itemType: 'list',
        items: [
          {
            element: <ReactIcon />,
          },
          {
            element: <ViteIcon />,
          },
          {
            element: <SassIcon />,
          },
          {
            element: <TurborepoIcon />,
          },
          {
            element: <SFCCIcon />,
          },
        ],
      },
    ],
    [keyPrefix]
  );

  return useMemo(
    () =>
      questions.map((question) => (
        <React.Fragment key={`question_${question.question}`}>
          <li className={styles.question}>{question.question}</li>
          <li className={styles.answer}>
            <span dangerouslySetInnerHTML={{ __html: question.answer }}></span>
            {question.items && (
              <ul key={`question_${question.question}`} className={styles.list}>
                {question.items.map((item, index) => (
                  <li
                    key={`question_item_${question.question}_${index}`}
                    className={clsx([
                      styles[`item_${question.itemType}`],
                      question.itemType === 'percentage' && styles.percentage,
                    ])}
                    style={
                      item.percentage
                        ? ({ '--p': item.percentage } as React.CSSProperties)
                        : undefined
                    }
                  >
                    {item.element}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </React.Fragment>
      )),
    [questions]
  );
};

export default Questions;
