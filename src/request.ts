import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

type Config = {
  providerUrl: string;
  cookies?: string;
};

export abstract class Request {
  protected axiosInstance: AxiosInstance;
  public readonly providerUrl: string;
  private isNode: boolean;

  constructor({ providerUrl, cookies = "" }: Config) {
    this.axiosInstance = axios.create({
      withCredentials: true,
      baseURL: providerUrl,
      headers: {
        "Content-type": "application/json",
      },
    });
    this.providerUrl = providerUrl;
    this.isNode = typeof window === "undefined";

    if (this.isNode) {
      this.axiosInstance.defaults.headers.common["Cookie"] = cookies;
    }
  }

  private setCookies(cookies: string[] | undefined) {
    if (!cookies || !this.isNode) return;

    this.axiosInstance.defaults.headers.common["Cookie"] = cookies[0];
  }

  protected async getRequest<T>(endpoint: string, config?: AxiosRequestConfig) {
    return this.axiosInstance
      .get<any, AxiosResponse<T>, any>(endpoint, config)
      .then((response) => {
        const cookies = response.headers["set-cookie"];
        this.setCookies(cookies);

        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  protected async postRequest<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.axiosInstance
      .post<any, AxiosResponse<T>, any>(endpoint, data, config)
      .then((response) => {
        const cookies = response.headers["set-cookie"];
        this.setCookies(cookies);

        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  protected async deleteRequest<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ) {
    return this.axiosInstance
      .delete<any, AxiosResponse<T>, any>(endpoint, config)
      .then((response) => {
        const cookies = response.headers["set-cookie"];
        this.setCookies(cookies);

        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
