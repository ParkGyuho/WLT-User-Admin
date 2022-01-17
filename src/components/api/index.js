import axios from "axios";

function showUserApi() {
  const baseUrl = "http://10.50.20.50:10010/api/users";
  const headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE2NzFjMjcwYWNhYjYzM2FkNjgyMzkiLCJsb2dpbl9pZCI6Im1hcmsiLCJpYXQiOjE2NDE0NjM4MzYsImV4cCI6MTY1MDEwMzgzNiwiaXNzIjoic3RyYWR2aXNpb24uY29tIn0.bWYe8P-0e-12c-v3TSFeEwM_6YgwMjIRE1qidpJm5xM"
  };
  return axios.get(baseUrl, { headers });
}

function showGroupApi() {
  const baseUrl = "http://10.50.20.50:10010/api/groups";
  const headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE2NzFjMjcwYWNhYjYzM2FkNjgyMzkiLCJsb2dpbl9pZCI6Im1hcmsiLCJpYXQiOjE2NDE0NjM4MzYsImV4cCI6MTY1MDEwMzgzNiwiaXNzIjoic3RyYWR2aXNpb24uY29tIn0.bWYe8P-0e-12c-v3TSFeEwM_6YgwMjIRE1qidpJm5xM"
  };
  return axios.get(baseUrl, { headers });
}

export { showUserApi, showGroupApi };
