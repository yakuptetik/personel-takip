import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '../utils/API';

export const useProjectStore = defineStore('project', () => {
  
  const projects = ref([]);

  function fetchProject() {
    API.get('/projects')
      .then((response) => {
        projects.value = response.data.projects;
      })
      .catch(() => {

      });
  }

  function getProject(projectId) {
    const project = projects.value.find(({ id }) => id === Number(projectId));
    return project ? project : null;
  }

  function addProject(project) {
    return new Promise((resolve, reject) => {
      try {
        API.post('/projects', project)
          .then((response) => {
            setTimeout(() => {
              projects.value.push(response.data.project);
              resolve();
            }, 1000)
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

  function deleteProject(id) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await API.delete(`projects/${id}` );
        const index = projects.value.findIndex((project) => project.id === id);
        if(index !== -1) {
          setTimeout(() => {
            projects.value.splice(index, 1);
            resolve();
          }, 1000);
        } else {
          reject('error')
        }
      }	catch (err) {
        reject(err);
      }
    });
  }

  function updateProject(project) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await  API.put(`projects/${project.id}`, project)
            const index = projects.value.findIndex((prjct) => prjct.id === project.id);
            if (index !== -1) {
              setTimeout(() => {
                projects.value.splice(index, 1, response.data.project);
                resolve();
              }, 1000)
            }
            else {
              reject('error')
            }
      }	catch (err) {
        reject(err);
      }
    });
  }
  

	return {
    projects, addProject, fetchProject, deleteProject, updateProject, getProject 
	};
});