import cn from '@utils/cn';
import * as React from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';

const data = [
  { image: require('@assets/images/dress-5.png') },
  { image: require('@assets/images/dress-6.png') },
  { image: require('@assets/images/dress-7.png') },
];

function ProductDetailsSlider(): JSX.Element {
  const scrollViewRef = React.useRef<any>(null);
  const autoPlayInterval = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const { width: screenWidth } = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = React.useState(0);

  // to detect which slide is active based on scroll position
  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollPosition / screenWidth);
    setActiveSlide(currentIndex);
  };

  // function to move to the next slide
  const goToNextSlide = () => {
    const nextSlideIndex = (activeSlide + 1) % data.length;
    scrollViewRef.current.scrollTo({
      x: nextSlideIndex * screenWidth,
      animated: true,
    });

    setActiveSlide(nextSlideIndex);
  };

  // autoplay with setInterval
  React.useEffect(() => {
    autoPlayInterval.current = setInterval(() => {
      goToNextSlide();
    }, 3000); // change slide every 3 seconds

    return () => {
      clearInterval(autoPlayInterval.current);
    };
  }, [activeSlide]);

  return (
    <View className="relative">
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        {data.map((item, index) => (
          <View key={index} className={cn('mb-2 justify-end items-center', `w-[${screenWidth}]`)}>
            <Image
              className="rounded-full"
              style={{
                width: screenWidth,
                height: 270,
              }}
              source={item?.image}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>

      <View className="absolute bottom-5 left-0 right-0 flex flex-row justify-center items-center space-x-3">
        {data?.map((_, index) => (
          <View
            key={index}
            className={cn(
              'w-[10px] h-[10px] rounded-full',
              index === activeSlide ? 'bg-black' : 'bg-white',
            )}
          />
        ))}
      </View>
    </View>
  );
}

export default ProductDetailsSlider;
