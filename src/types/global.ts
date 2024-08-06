declare global {
  interface Window {
    Swal: any
  }
  const Swal: {
    fire: (options?: any) => Promise<any>
  }
}
export default global
