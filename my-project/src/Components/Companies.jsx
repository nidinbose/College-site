import React from 'react';
import { motion } from 'framer-motion';

const Companies = () => {
  return (
    <section className='w-full bg-white py-[50px] flex justify-center items-center p-4 overflow-hidden'>
      <motion.div 
        className='md:max-w-[1100px] m-auto max-w-[400px]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-center text-xl font-bold text-black/30"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          Trusted by over 25,000 teams around the world
        </motion.h1>
        <motion.p
          className="text-center text-[#A0CE4E] text-2xl py-2"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', delay: 0.22 }}
        >
          Leading companies use the same courses to help their employees keep skills up
        </motion.p>
        <motion.div
          className='flex space-x-4 whitespace-nowrap'
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', flexWrap: 'nowrap' }}  // Ensure the images stay on a single line
        >
          <div className="flex space-x-4">
            <motion.img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAADo6OjY2NjS0tJGRkbg4OBQUFD6+vrNzc0hISHu7u5BQUFTU1NMTEzk5OQYGBgvLy8mJiZ4eHjDw8Nubm68vLz09PQ2NjaSkpJZWVmysrIODg6JiYmCgoKmpqZhYWGcnJzFTM83AAAEJElEQVR4nO3a55aiMBgG4EgzCIo0g4jt/m9yhRRIwWkLO2fP++wfTVsymC8kgRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgC/xY4eKEZLEgZOfTatHZnbMtOatVuJowc5cm9SWV4ScckfGS7htz76sTW9m9eY8bZ3erfzrgp0pNy4nQi/OjEGXl4m42NrK3E1bjx5WfrlgZ+yr+bgzL8WJd6a1s6pJ6yc7u16wM/BbRb5D0EczV4amj1uZI91TjbvayOav5cfKzdHW/+4vm9173WvY0LKzM26ybXq22+iWDADfiWbCgbmi2WYTyj9+cnTkLtmZa7g9mLZNTEiVbj+Qe4S+qlvak2g7aOzM8Pz2cn7Gixz64cBcGXopOlNdTEIkcWV6by8HDDSR6FyGSmIqidlJ00aoM3V5lRyeTaBnRGrgygyaqqSHLHU2Bvlt6GZhRZWVO5N+pTNqLD+Ny05fAYQwM45VZB1xKgJZ7esZmYxwqcygtUpSV3c3ImJ6eSVeUiMxXqkzNPMEc8zIjExlJJ6VxDxDP8LMtGytMfNfYXKNGbCZDNukaGZlRo4lbELWETfhIH0Yq9ooDWc09/Fncz+IxFZ8SG9JnepJYbPWmBmjmREAIjMkjXF50u1nJxLDWnwqnrkM0yr6rRXN1IowN0KzP9eX7bTXKjQfK7Ncc2/kx7XmGUKl2QyTu5Bdfr5p+ASqZgNznjFni+lMorBJdbPYbNOLUT91c8zMBoBwGpvUmNl4pNGKlTSQkWC1APCJZ7N3EWAMAJ6+u9RdSLB6NAvC/WBbG/NMdtjPCO/jpHlpRWKbELYdy2zLiES1SAiNv9NimNw7icwxE8zvzoxFvWnatMirOar2f4yHC/gMGmWcFc1kRqT+rl5mJTGZNDwZe7JO1q/3qSxv3vTFxMec25uPMyI9P6r1TFvIJDWlPxuR1Hj9btlOfCv6HTR/L4uv/2z2s5Xmrr8XsfrW93b9aCbvTDF7Zzr7zhRqQ/8pU/o7QzxRomj7H5a/L1a+MzRJGP9n787wjOnujPo3KcULsWkl/o3K0qvtzvwnrEPJ4eAxmT/T1I8vI70Un3toNnzh8y/z9VrLnmk6VpH8THNujSkV/V6zVj3d883XS5/aXIbP/kNbrP66M01hb58C7HhnqmH/jw+gMZpxyx5pzJ7PFO/x8xmtepfzziRlVxz3/D/w005resnOJJ5DP5Fbe2EW6qhOx1blgfS7hRD8dR/OGf9kUvnmewANfzah5ksL8gTwqvZiYuMwYMn3AL71hkZ4nXlDYyfPxfyD/LRmNDsfHKeV/YZ9FbpXmO2jfI7vzhjVW9kFWslnHb/WShyWPNP88nsA+qGk+R6APVSoWX/BzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA9Acd6lo9f8xPJAAAAABJRU5ErkJggg==" 
              alt="Company 1" 
              className="w-full mt-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX///8IYKgAXqcAXKYAWaUAT6AAU6IAVaPf6fAAV6T3+vpCerTK2uecttVWiLsAVKM0dLDr8vfG1ua1ydwgaquuw9ns9PimvtbS4Oxpkr5vl8GEpcgAYKYATaBdi7p1nMUVZqiMq8tIfrOeuNOCpMkASZ7b5u88eLMob60AQ5tOhLaowNa+z+FfjLjI2OcAPppDU/mUAAAKlElEQVR4nO2d6WKiOhhAS1aDKCCLoChutY6lve//dhdIQAS1LqDQ5vzpiAOBY9YvAd7eJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUTyN1F7XuSsl8tNOEkJp8vBONJ66qtPrE2o22gQ7m2EMdYpYwghmBD/RYzpBGO0m08d7687U3vWcm5TrDMEAVDOAQBCOiE7f/xXjZnRchUQPbZ0VlLZGaQkGI57rz7zJ+NaoU1jTyfyEACQk/zztLDdcvvqC3ga2tTGOgJHBuLKiRJCKAoWtvHRj/kw7AAygonOYCnzAYR34z9QHl3ri+KCKABjSSww5tO1pW3NsgHV7GnOIFwtGGFHxoBOw9+dvVxnT/X8miGiSTO3tDz3il21tW8TvSgM4eGv1aVaw9hUnp8wMcLPG9s205oExWwJyfxXVvbbEIpskYiiw/W9fQBvqmBU0DWt9zxfj/q5m3FTcY2NhusHS4/2RVmevVig1XOS7aAXIh3wRp8aS62OVsxdgoMu/HsylzYkaS0DdbYfm7UdVl0iltnS+1e0EB0g6mOYmiJzq+aOkRrivF0NfkE9H+1IrAowvHKa6EJ6dpa5APEaOP4zGRnxTw8gsQf1lb4SIckyV7dtbVdxAQSU+Y02VhYF2QiouyXRncQFEOLFuumq18v69HDR1cHigKFY1Sp6QlK9rEePVk9IrQG0d4Dw15MGbr2s3iLr5yRYM9o7DZ9XhWhEVPKzxhqSJtH8p572WtiCw2em2lX2YmRNftUwsSFMnVdbsKN1fBM4nLHojriWk3VMlqIrT7oSDfRGnMZqdhVTPYb+4yl8f42tcCS+Ev0HtGkq8ZpZYZLw3lgDroowK05lqRPHH45C0ROd8loLBE0lXjNDfi1s3FQCWfbhsjTL2YTWSGQtcyZEdqSKf7Ks7diZBm9OJsfgqaNlU6nXy62y9vYuxg6+r03gWNbb1+coWn9lX65ZN9pD00n/3Cqrn045AzK6Np2SLHeyHEzycbqHRfDhhhN/AaYySP/eLou39vfKinUVxwms9GUr6Sk6l7UnLGF2bWv4uKwjPsThri7VL8CkkHFZ1jhlfW3IsmZZPj8cda493PMxIVBm94Wtapa14T0t8cu1EXcB7w4j1SxLjHha3HcwkIL8O/dtSFZrZ1znTAF29sE13YRs1ZDKP6ab+J9SjFzI0q3iXpyeswwn4dI6jor9IAu1O2ctcfHM++844Z842+//cBm2WhecCFkKTfc6lGV3GWCKEERMn31YheQuywrbXWdp8XhMP1xk1s8SZ5sHew8ASNmhseoX10geemdLUlxThD8OZi7LEsnTxkZbD5EEAaBx+PyzrMTXLC8mJ2W5hn68A6R5x+myrAW4sQp8KvM43+NCp+oqWfEuWck6JcsMKktyQR4rvijLxeLwrQz/WfHZHbWEV8oCVPz/E7LUxWFbXhYBEwPAi7IikRxt41Srmpw4LTZX52QxGsMoyzzoosRlslDyNQ8ZzlHmh7B4czZ7uhdJXpIl6nf40dwl388m7tagsLjltCxgWzxyvu6LODkU197PIlDJt59J6fkWRQnCpeeqvbWShUZ5Qbwoq81xZTO5LnJ01mdkHZoA8eMDhX/sV0a+WQAvW5umig1C7yVZI+GZPGPFwK348YXD+dGmH2WZoqGj3EWlB+/NRF7Mqx1TxF1IWtwvyVrxgwHUwiorDXmX4t0/ylLFghdR01VkiaFwMXOITbzzdEHWVmQsNK989XrSiyjNpDwsi/eUjiZoPH4QnocvyBJpt7IUpqfNSqOwR2W5tCAmT0iUzDzVk7JGouUFi9ousT6c5LrK3b9HZYkd0MQ1c1yR21BSzZ2XZYtOBmvjoqOkOq38io/KcnjOUiApICzQxM9ZWRuxZyurdzdp1mBY2vqorHW+rr1KuobhnKys21Ac1bcHK5FFrdLWJmWlY9AzsvKVf+2cu58kl0nKhaHRnHVelrrIRpG4lQGHpD4FSrl+qEsW1Kv8OytL3WVjzrvj241iJhpgv7z5UVkW7+DDeWRVOdcaqnbmqvrrtYLvVFbld3xUlidkTc6le0JW7xD/auktFuOkpa4O7x+VZdLyDiWqskZZFCfe2M5wMl84Vp0YqGm4w/tUp6jImua3hSmtvaE1bQyrneU7ZdFclgjhlCrqQ+kqyfJ2NFOl0FZW7gmpFfqwLBFVQXkW1bKYVPHQq/eovD+X5f07TALprXXFr7Kas+Y3yhIrOQDMo3/ZEI+E2bIrK4Agn+HIyqmQhXNXpDyYaBFcVmXmd4pukzUWsUBAAtsOkvo5yq4fofnA+Rz4i3R9O87mGkXeLckCuKXzqimpLFT5NUU/6WpZ5qEpA4DPYgyzZxAkzxGhLPuUtXRjekIWbGMM60D6A8NKTFLFt8l6CwvjGzEVVp02TH1gt3iAoixAjHbfTJ5WNmBX2b7Gt8kqqhGTrG6AlArMznyM0r5CQRaqtjMtgzfxrDq6GNKbZL2ZSv5whmz6Xl0RcKwK4kJTZyULIXJZ8Vetv2lukBafU4s3NxiBXBZOFyMXVkPE/SS+Pjm/QjUklD8nS8874M6CHHIXQNg4iiWYE0T47SjeO563c4RzBK/JTy6E6m0W/zJZwE5YHBamq4t0ix0Uahl37PeNnWHYhaWgka9gTKmuY7wIK3dMqNo6le098fbPB+DzTicqrRS3jpJhapFjRdc8KqrtiGHHrBO/7Mvho7pWLitoH9nUcSujbW1DzGlWRzySKuIuSUB/QQXcPL5YOfaqZRjbtob6TvEt1haQl9woY05mnXqAg4g8Afb87oO7oehlWfouHBGLevqjhRJVnXs0SJA9iOlMP74Ztv4srS07JisPakLjaXkrWmER0+mYrLd9Pmu+eEq9ZQ4WJA9/dU2WmYeiICuvp6mfaEiLT/numqz0DgsRdCLNzkRpIdKPw82dk/UWHm5JQqCxSQNvGhRvE1Ne2xu+n30hoolXDUQt1e9wgVnZVCdzVnrT7+H88b7ex8CYzlyp5ikO29ea1FNQi7YUSIy6nnPrjjY7Sk9OiyUJzTr5FHh1RY+uQif+w0sV3WhqEP1MlkqmX7v7foFJ6a5CSJDv3BuFV73xxMbkxDtTclWM+l1V9ZbMrJbzAKJkFzrbm0qk2ovWvlF+qUdFFYXT1k8UXsRbVFcZA6QT8DFZR9sfwoOquR2Np3MDJO+LufBGp/RHwMZn9wPZ4exUuQEQxsoosPv+Zrl2rJHmedvt1vO0UeSM18uNv9otICWUXnzxlSCuDsMOTKlewdYoz7kXnAH+AiKqE0zSpzuQ2A9/eRpQfpTEj0HZvvkh1dNwFvS6674ZAHW6Gv+yYP+4EBSozxQiaHh349pmrB0+2zu6RxTUcRBG3a/Sz+BNqA6DWkQxzPaPvp6n7ajWEOkX+0o/egKQYmU/+B1N30+o0WRB6D3C4maTEmZMbuzQdp3t2LfJD93xkiZGMOyHf/Utou5o4O/ivlXyKKyTr8Dk/VZG4/8TrMJ1cw+w7gw9zVmG+10Qd9VJ+qBqXec3P1MKg93KT14BKd98XEY1e72tp8V48bCnZ5YfaieRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkHeZ/Vtug5RvydXsAAAAASUVORK5CYII=" 
              alt="Company 2" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="data:image/png;base64,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" 
              alt="Company 3" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAAclBMVEX///8AbLcAarY8gcAAaLUAYrMAZrVilckAabYAXrGAp9IAYLIkd7wAZLT6/P7S3+7F1ulyn87c5vLv9PmIrNQwe72mwN7o7/YAWrB/p9HE1emcudodc7ptm8ytxeDY4/BJh8OUtNhZj8a3zOQAVa5bkcdhsiziAAAFgUlEQVR4nO3a2YKjKhQF0JIAgRBjNLNmNF3//4s3o5lwo0n1rX7Y66keggLFcDj49UVEREREREREREREREREREREREREREREREREREREREREREREREREv2hw8Nt1+HcMZsm+GKffnYkw0p4oI/udbbc3LvbDbPRrFfvuPlmt0t6id5bOUNlR2gMWafDls7xIt7F1SmktpTiKzo5/Gim1VspZG23TIs8CDxuVzy15UMKmeE2d9NBn8RKWHTsNuDFsST7eKqu0NNfuQIzUsbPL1RR00M7bkqpFndZd8wWrpPawrILNsrVzYZAvloduMQ065YGQsdXpsOapEtbG1RWrt3ewLrDsNEaVkSt/qdF0e+iXJoOlpk7O7HyL9RrWRuAZ4DVBlYwLWBY3wvqG/2DdsXHr8fLcTu12r49ewu6O1627JrGweXAzzdGQi8zW87bu5x1zpqLnnh/C2gjdumu+SgkeqHuwbAc283V+r/sWva0dYZPHp29hbbRnoAXM5uiBc7jrZXDIif7Tz6cCr9ynQtdNpcHeJR7nLK5NYAZ49dA/Un7Dsl04CJ52uLWIcXONdtZNytXiFBiVfetCy/Xj6rqCtZHhUOvZAK82CSo7gkNOiPvfJksFmymVLYvkccvfFJPAFFTTprUJzACvnUbNm8CyY1T2cYdbWTgEpC39YdSmhAXvBw6ujSxbd80XHLaBuA9uC5G7ze8sgvUWc3AuwVuhvRXEtcEzwAtGSyI6nYhfncsWMNLSi+ol+zmOOybwmDRT1tWxf6r/Ho5CX/aFBnC0JGw95+BYiObV2lHghcDiMOGwkGSbTeKRZbPZrBqc8B2hGeCT4wXyA7J7fcc6sEZOUQUbgwefp32hGRy7faIKPZLAqGkfyHvBg0/o5OOzwdHSB6rjwgDHKAomMZrDB5/Itn8ijt0+4fLLK1Z4h8JBQnPw4BM6+fjM/tqwqeIOfCLxH9TfEGjJvH1KdYF3mg9U6QB4IrlbsD/046/Bx4VP3NIBeLVx7QOyd1piN62fWOBhI4BA31TpADzW38moeMGDT2TeSBPD/6lY9hHcN1U6IIFRx49NqcDozMNPeIKPCwaWHeI0cbUtBPqmJp38oy15K00MjwuBJBmOtG4HwMCceiNabd2SSLWPLnFyFSfJcKR1nw7Aib5AtbO0xin5Vc2Un08Tw+RqIEn2DbfM+3QAzsVFDsU3Y6vr7+Hmt/n442linFzFMRkO6B5i3QzHfsJ675kOBoVEm4+9nTUCaWLVPk0Mjwu+y5M7ONJ63BZ6cJ08/Fttmr/UfpCvLEouG3uXckhhbUyZDBtJkuQSBo1gZ+NdLxQzPv56EjqzSWX7q906H2ZHST5NJ/MYFRJucpcmDKSJI6Oace7PJVuCk6tPzXuCY8b4OR8zCZ9MhNRxrM6pvDjGl9qRVg9vwHFfC9fb7YGD97w43QTrLtTL70v4spYN0Hb8OAXDV14N6UuOBydXHewaHGlpT0JmHUifNmZiNR61qU0b17AF/sjXvDs40vJ+VTLozd//auLqMGQ6r/EQrk0L1xwPTq5aeMuFI63ar0rG2gXWEUQcFuxJ4akXrk0b11bDNLHBt1w4xQwCozyVNrTOegijYxut9v70FI77WrjebidzY4wn82DMMeK08OumQ1l/2sIcS+st7Nds2jXHb9iaddCxV5SNt+N97UDO6mrT2vwS3OzKcrvtvNqWp48iYfOK0lPwUrrbLcPJqllerCbKOhUfv300IrrLBp36WB43dOes65eLaYJvsccdXzvegT+K+F8NsuG66KXfnU4kjbreBwrZ75TdxW66T37vq9l/zYBfWxMRERERERERERERERERERERERERERERERERERERERERERERERH9df8B0ntcTOnRe2AAAAAASUVORK5CYII=" 
              alt="Company 4" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            {/* Duplicate the images to create a loop effect */}
            <motion.img 
              src="data:image/png;base64,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" 
              alt="Company 1" 
              className="w-full mt-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="data:image/png;base64,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" 
              alt="Company 2" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            {/* <motion.img 
              src="data:image/png;base64,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" 
              alt="Company 3" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            /> */}
            <motion.img 
              src="data:image/png;base64,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" 
              alt="Company 4" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Companies;


