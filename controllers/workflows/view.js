export default class WorkflowsView {
  create(workflow){
    return {
      message: 'File downloaded successfully',
      filekey: workflow
    }
  }

  error(err){
    return {
      payload: err
    }
  }
};
