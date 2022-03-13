import React from 'react'
import { skills } from 'config'

const Skills = () => {
  return (
    <div id='skills'>
      <h2>Skills</h2>

      <div className='inner'>
        <div>
          Aliquam vehicula eget lorem blandit pharetra. Praesent hendrerit vehicula metus a convallis. Vivamus vel leo accumsan, condimentum lorem et, maximus diam. Praesent ultricies scelerisque ligula eget venenatis. Fusce gravida tellus ac nisi imperdiet auctor. Vestibulum vulputate vehicula dui nec blandit. Vestibulum interdum risus ac justo mattis, quis iaculis massa condimentum. Proin fringilla faucibus odio quis maximus. Integer sit amet gravida mi. Integer non lectus vitae lorem aliquet porttitor ut non enim. Curabitur varius, dolor sed hendrerit sagittis, nisl lacus mattis ligula, ut porta neque sapien sit amet dui. Suspendisse vel tortor pulvinar, vulputate sem eget, rhoncus ligula. Sed tincidunt massa sed massa pellentesque, vitae suscipit eros aliquet. Sed ipsum turpis, iaculis non lectus sed, rhoncus dignissim erat. Pellentesque iaculis quis arcu id malesuada.

          Suspendisse eget viverra quam. Aenean est justo, mattis non nisl et, iaculis luctus neque. Sed mollis leo sed diam vehicula ullamcorper sit amet et sapien. Sed eu velit id mi convallis feugiat. Suspendisse at lobortis elit, id eleifend libero. Maecenas sed felis augue. Curabitur ut mi mi. Cras volutpat felis a aliquet posuere. Nullam iaculis ac mauris mollis suscipit.

          Sed id auctor est. Donec vulputate nisl in orci placerat mollis. Cras at nibh et lectus egestas luctus ut et metus. Maecenas vitae orci placerat, imperdiet purus vitae, ultrices ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ante dolor, dignissim sed arcu non, dapibus mollis quam. Aliquam tincidunt ipsum orci. Praesent porta, turpis non condimentum efficitur, lorem risus porta justo, ac commodo mauris nibh vel nisl. Ut molestie tincidunt felis, sed feugiat purus. Suspendisse ut libero ultrices nisi pretium semper. Sed lobortis ipsum non mollis elementum. Nunc vitae varius ipsum, a aliquam ex.

        </div>

        <ul>
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Skills
