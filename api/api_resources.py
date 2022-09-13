import api.endpoints.blog_endpoints as blog_endpoints


def add_resources(api, base_url):
    # add API endpoints
    blog_endpoints.add_resources(api, base_url)
