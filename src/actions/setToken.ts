import ora from 'ora'
import { r } from '../utils/OpenAI'
import { config } from '../utils/Storage'

export async function setToken(token: string) {
  const spinner = ora('Checking token...').start()
  try {
    await r.get('/models', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    config.set('token', token)
    spinner.succeed('You are ready to go!')
  } catch (error) {
    spinner.fail('Token is invalid')
  }
}