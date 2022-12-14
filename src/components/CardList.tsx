import { SimpleGrid, useDisclosure, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [currentImageUrl, setCurrentImageUrl] = useState('');

  function headViewImage(url: string): void {
    onOpen();
    setCurrentImageUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="48px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={headViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={currentImageUrl}
      />
    </>
  );
}
