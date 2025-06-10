import React, { forwardRef } from 'react';
import { Painting } from '../types/Painting';
import styles from './PaintingCard.module.scss';

interface Props {
  painting: Painting;
  authorName: string;
  locationName: string;
}


const PaintingCard = forwardRef<HTMLDivElement, Props>(
  ({ painting, authorName, locationName }, ref) => {
    const fullImageUrl = `https://test-front.framework.team${painting.imageUrl}`;

    return (
      <div ref={ref} className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={fullImageUrl}
            alt={painting.name}
            loading="lazy"
          />
        </div>

        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.title}>{painting.name}</div>
            <div className={styles.year}>{painting.created}</div>
          </div>
        </div>

        <div className={styles.meta}>
          <div className={styles.author}>{authorName}</div>
          <div className={styles.location}>{locationName}</div>
        </div>
      </div>
    );
  }
);
PaintingCard.displayName = 'PaintingCard';
export default PaintingCard;
