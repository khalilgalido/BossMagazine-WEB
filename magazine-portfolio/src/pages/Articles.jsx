import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Articles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    supabase
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false })
      .then(({ data }) => setArticles(data || []))
  }, [])

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  )
}