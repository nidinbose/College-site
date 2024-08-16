import React from 'react'
import { motion } from 'framer-motion'

const Companies = () => {
  return (
    <section className='w-full bg-white py-[50px] flex justify-center items-center p-4'>
        <motion.div 
          className='md:max-w-[1100px] m-auto max-w-[400px]'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
            <h1 className='text-center text-xl font-bold text-[#536e90]'>
              Trusted by over 25,000 teams around the world
            </h1>
            <p className='text-center text-[#536e96] text-2xl py-2'>
              Leading companies use the same courses to help their employees keep skills up
            </p>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 lg:gap-x-12'>
                <motion.img 
                  src="" 
                  alt="company1" 
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}  // Added hover effect
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
                <motion.img 
                  src="" 
                  alt="company2" 
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}  // Added hover effect
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <motion.img 
                  src="data:image/jpeg;base64,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" 
                  alt="company3" 
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}  // Added hover effect
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                />
                <motion.img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAADo6OjY2NjS0tJGRkbg4OBQUFD6+vrNzc0hISHu7u5BQUFTU1NMTEzk5OQYGBgvLy8mJiZ4eHjDw8Nubm68vLz09PQ2NjaSkpJZWVmysrIODg6JiYmCgoKmpqZhYWGcnJzFTM83AAAEJElEQVR4nO3a55aiMBgG4EgzCIo0g4jt/m9yhRRIwWkLO2fP++wfTVsymC8kgRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgC/xY4eKEZLEgZOfTatHZnbMtOatVuJowc5cm9SWV4ScckfGS7htz76sTW9m9eY8bZ3erfzrgp0pNy4nQi/OjEGXl4m42NrK3E1bjx5WfrlgZ+yr+bgzL8WJd6a1s6pJ6yc7u16wM/BbRb5D0EczV4amj1uZI91TjbvayOav5cfKzdHW/+4vm9173WvY0LKzM26ybXq22+iWDADfiWbCgbmi2WYTyj9+cnTkLtmZa7g9mLZNTEiVbj+Qe4S+qlvak2g7aOzM8Pz2cn7Gixz64cBcGXopOlNdTEIkcWV6by8HDDSR6FyGSmIqidlJ00aoM3V5lRyeTaBnRGrgygyaqqSHLHU2Bvlt6GZhRZWVO5N+pTNqLD+Ny05fAYQwM45VZB1xKgJZ7esZmYxwqcygtUpSV3c3ImJ6eSVeUiMxXqkzNPMEc8zIjExlJJ6VxDxDP8LMtGytMfNfYXKNGbCZDNukaGZlRo4lbELWETfhIH0Yq9ooDWc09/Fncz+IxFZ8SG9JnepJYbPWmBmjmREAIjMkjXF50u1nJxLDWnwqnrkM0yr6rRXN1IowN0KzP9eX7bTXKjQfK7Ncc2/kx7XmGUKl2QyTu5Bdfr5p+ASqZgNznjFni+lMorBJdbPYbNOLUT91c8zMBoBwGpvUmNl4pNGKlTSQkWC1APCJZ7N3EWAMAJ6+u9RdSLB6NAvC/WBbG/NMdtjPCO/jpHlpRWKbELYdy2zLiES1SAiNv9NimNw7icwxE8zvzoxFvWnatMirOar2f4yHC/gMGmWcFc1kRqT+rl5mJTGZNDwZe7JO1q/3qSxv3vTFxMec25uPMyI9P6r1TFvIJDWlPxuR1Hj9btlOfCv6HTR/L4uv/2z2s5Xmrr8XsfrW93b9aCbvTDF7Zzr7zhRqQ/8pU/o7QzxRomj7H5a/L1a+MzRJGP9n787wjOnujPo3KcULsWkl/o3K0qvtzvwnrEPJ4eAxmT/T1I8vI70Un3toNnzh8y/z9VrLnmk6VpH8THNujSkV/V6zVj3d883XS5/aXIbP/kNbrP66M01hb58C7HhnqmH/jw+gMZpxyx5pzJ7PFO/x8xmtepfzziRlVxz3/D/w005resnOJJ5DP5Fbe2EW6qhOx1blgfS7hRD8dR/OGf9kUvnmewANfzah5ksL8gTwqvZiYuMwYMn3AL71hkZ4nXlDYyfPxfyD/LRmNDsfHKeV/YZ9FbpXmO2jfI7vzhjVW9kFWslnHb/WShyWPNP88nsA+qGk+R6APVSoWX/BzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA9Acd6lo9f8xPJAAAAABJRU5ErkJggg==" 
                  alt="company4" 
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}  // Added hover effect
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
            </div>
        </motion.div>
    </section>
  )
}

export default Companies
