package com.alexbezverkhniy.blogapi.repository.search;

import com.alexbezverkhniy.blogapi.domain.Blog;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Blog} entity.
 */
public interface BlogSearchRepository extends ElasticsearchRepository<Blog, Long> {
}
