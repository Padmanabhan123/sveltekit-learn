export async function load({params}:{params:any}) {
    return {
        content: `hello ${params.slug}`
    }
}