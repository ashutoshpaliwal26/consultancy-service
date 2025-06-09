import React from 'react';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  position: 'top' | 'bottom';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageSrc, position }) => {
  return (
    <div className={`flex-1 ${position === 'top' ? 'mx-auto max-w-xs' : ''}`}>
      <div className="flex flex-col items-center">
        <div className="border-2 border-maroon rounded-lg p-4 mb-2 w-full">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-32 object-contain mx-auto"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;