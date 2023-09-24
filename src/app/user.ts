
import "../../components/Home/Homepage.css"
interface Props {
  profile: any
  provider: string
  onLogout: () => void
}

const User = (({ provider, profile, onLogout }: Props) => {
  const avatar =
    profile?.avatar ||
    profile?.profile_image_url ||
    profile?.avatar_url ||
    profile?.picture ||
    profile?.picture?.data?.url ||
    profile?.profile_image_url_https ||
    'https://maxcdn.icons8.com/Share/icon/p1em/users//gender_neutral_user1600.png'

  return (
    <div className='card'>
      <div className='content'>
        <div className='data'>
          {Object.entries(profile).map(([key, value]: any) => (
            <div className='field' key={key}>
              <div className='label'>{key}: </div>
              <div className='value'>{JSON.stringify(value)}</div>
            </div>
          ))}
        </div>
        <button className='btnLogout' onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
})

export default User