import { ProjectCard } from '~/app/(main)/projects/ProjectCard'
import { SparkleIcon } from '~/assets'
import { getSettings } from '~/sanity/queries'

export async function Projects() {
  const res = await getSettings()
  const emptyProject = <p className="text-zinc-500 dark:text-zinc-400 flex items-center"><SparkleIcon className='mr-1'/>暂无项目，晚点就有啦</p>
  if(res) {
    const { projects } = res
    return projects?.length ?
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </ul> : emptyProject
  } else {
    return emptyProject
  }

  
}
