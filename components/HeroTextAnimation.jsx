'use client';
import { motion } from 'framer-motion';

export const HeroTextAnimation = (props) => {
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.4 },
    },
    visible: {
      y: 0,

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.3 },
    },
  };

  console.log(props.text);
  const splitWords = props.text.split(' ');

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }
  console.log(words);
  words.map((word) => {
    return word.push('\u00A0');
  });
  console.log(words);
  return (
    <div className="flex flex-row  ">
      {words.map((word, index) => {
        return (
          <div className="flex gap-1" key={index}>
            {words[index].flat().map((element, index) => (
              <motion.span
                className=" block overflow-hidden "
                key={index}
                transition={{
                  staggerChildren: 4,
                }}
              >
                <motion.div variants={item} className="block bg-clip-text ">
                  {console.log(element)} {element}
                </motion.div>
              </motion.span>
            ))}
          </div>
        );
      })}
      {/* {} */}
    </div>
  );
};
