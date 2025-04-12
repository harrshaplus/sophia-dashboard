import styled from 'styled-components';

const GallerySection = styled.div`
  width: 400px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  height: calc(100vh - 4rem);
  position: sticky;
  top: 2rem;
  overflow: hidden;

  h2 {
    color: #2E7D32;
    margin-bottom: 1rem;
  }
`;

const GalleryContainer = styled.div`
  height: calc(100% - 3rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4CAF50;
    border-radius: 3px;
  }
`;

const GalleryImage = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-height: 300px;
  max-height: 300px;
  background: #f5f5f5;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(76, 175, 80, 0.2);
  }
`;

const dummyImages = [
  { id: 1, url: 'https://picsum.photos/id/237/400/300', title: 'Nature 1' },
  { id: 2, url: 'https://picsum.photos/id/238/400/300', title: 'Nature 2' },
  { id: 3, url: 'https://picsum.photos/id/239/400/300', title: 'Nature 3' },
  { id: 4, url: 'https://picsum.photos/id/240/400/300', title: 'Nature 4' },
  { id: 5, url: 'https://picsum.photos/id/241/400/300', title: 'Nature 5' },
  { id: 6, url: 'https://picsum.photos/id/242/400/300', title: 'Nature 6' },
  { id: 7, url: 'https://picsum.photos/id/243/400/300', title: 'Nature 7' },
  { id: 8, url: 'https://picsum.photos/id/244/400/300', title: 'Nature 8' },
  { id: 9, url: 'https://picsum.photos/id/245/400/300', title: 'Nature 9' },
  { id: 10, url: 'https://picsum.photos/id/246/400/300', title: 'Nature 10' },
  { id: 11, url: 'https://picsum.photos/id/247/400/300', title: 'Nature 11' },
  { id: 12, url: 'https://picsum.photos/id/248/400/300', title: 'Nature 12' },
  { id: 13, url: 'https://picsum.photos/id/249/400/300', title: 'Nature 13' },
  { id: 14, url: 'https://picsum.photos/id/250/400/300', title: 'Nature 14' },
  { id: 15, url: 'https://picsum.photos/id/251/400/300', title: 'Nature 15' }
];

const ImageGallery = () => {
  return (
    <GallerySection>
      <h2>Image Gallery</h2>
      <GalleryContainer>
        {dummyImages.map((image) => (
          <GalleryImage key={image.id}>
            <img src={image.url} alt={image.title} loading="lazy" />
          </GalleryImage>
        ))}
      </GalleryContainer>
    </GallerySection>
  );
};

export default ImageGallery; 